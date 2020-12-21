import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../../components/PageHeader';
import { Table, TableHeader, TableBody, TableRow } from '../../components/Table';
import { ActionButtonGroup, EditAction, DeleteAction } from '../../components/ActionButton';
import { fetchCategories } from '../../actions/categoryAction';

function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector(store => store.categoryReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [])

  const tableRows = categories.map((el, index) => {
    return (
      <TableRow key={index.toString()}>
        <td>{index + 1}</td>
        <td>{el.name}</td>
        <td>{el.active ? 'Active' : 'Archived'}</td>
        <td>
          <ActionButtonGroup>
            <EditAction url={`/categories/${el._id}/edit`} />
            <DeleteAction />
          </ActionButtonGroup>
        </td>
      </TableRow>
    )
  })

  return (
    <>
      <PageHeader
        title='Categories'
        totalCount={categories.length}
        buttonTitle='New Category'
        buttonLink='/categories/new'
      />

      <Table>
        <TableHeader>
          <TableRow>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </>
  )
}

export default CategoriesPage;
