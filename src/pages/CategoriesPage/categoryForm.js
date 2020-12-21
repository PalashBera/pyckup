import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form';
import Textbox from '../../components/Textbox';
import Selectbox from '../../components/Selectbox';
import SubmitButton from '../../components/SubmitButton';
import { ButtonGroup, Button } from '../../components/Button';
import { statusOptions } from '../../constants/mockData';
import FormError from '../../components/FormError';
import categoryFormValidator from '../../validators/categoryFormValidator';
import { requestCategoryCreate } from '../../actions/categoryAction';

function CategoryForm({ category }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(category ? category.name : '');
  const [active, setActive] = useState(category ? category.active.toString() : '');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const categoryErrors = useSelector(store => store.categoryReducer.errors);

  useEffect(() => {
    setIsLoading(false);
  }, [categoryErrors])

  const isValid = () => {
    const { errors, isValid } = categoryFormValidator({ name, active });
    if (!isValid) setErrors(errors);
    return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      setErrors({});
      setIsLoading(true);
      dispatch(requestCategoryCreate({ name, active }))
    }
  }

  return (
    <Form title={`${category ? 'Edit' : 'Create New'} Category`}>
      {categoryErrors && <FormError errors={categoryErrors} />}

      <Textbox
        fieldName='name'
        value={name}
        label='Name'
        error={errors.name}
        id='name'
        onChange={e => setName(e.target.value)}
        autoComplete='off'
        autoFocus={true}
        placeHolder='Category name'
      />

      <Selectbox
        fieldName='active'
        value={active}
        label='Status'
        error={errors.active}
        id='active'
        onChange={e => setActive(e.target.value)}
        placeHolder='Select one status'
        options={statusOptions}
      />

      <ButtonGroup>
        <Button
          title='Cancel'
          url='/categories'
          formButton
        />

        <SubmitButton
          buttonText={category ? 'Update' : 'Create' }
          disabled={isLoading}
          handleClick={onSubmit}
        />
      </ButtonGroup>
    </Form>
  )
}

export default CategoryForm;
