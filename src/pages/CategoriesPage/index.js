import PageHeader from '../../components/PageHeader';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow
} from '../../components/Table';
import {
  ActionButtonGroup,
  EditAction,
  DeleteAction,
  DetailsAction
} from '../../components/ActionButton';

function CategoriesPage() {
  return (
    <>
      <PageHeader title='Categories' totalCount={1000} />

      <Table>
        <TableHeader>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </TableHeader>

        <TableBody>
          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>
              <ActionButtonGroup>
                <DetailsAction />
                <EditAction />
                <DeleteAction />
              </ActionButtonGroup>
            </td>
          </TableRow>

          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>
              <ActionButtonGroup>
                <DetailsAction />
                <EditAction />
                <DeleteAction />
              </ActionButtonGroup>
            </td>
          </TableRow>

          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>
              <ActionButtonGroup>
                <DetailsAction />
                <EditAction />
                <DeleteAction />
              </ActionButtonGroup>
            </td>
          </TableRow>

          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>
              <ActionButtonGroup>
                <DetailsAction />
                <EditAction />
                <DeleteAction />
              </ActionButtonGroup>
            </td>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default CategoriesPage;
