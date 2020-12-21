import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import CategoryForm from './categoryForm';
import { fetchCategory } from '../../actions/categoryAction';

function EditCategoryPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const category = useSelector(store => store.categoryReducer.category);

  useEffect(() => {
    dispatch(fetchCategory(id));
  }, []);

  return (
    <>
      <PageHeader title='Edit Category' />
      <CategoryForm category={category} />
    </>
  )
}

export default EditCategoryPage;
