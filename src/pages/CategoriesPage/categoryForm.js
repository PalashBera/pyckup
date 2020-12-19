import { useState } from 'react';
import Form from '../../components/Form';
import Textbox from '../../components/Textbox';
import Selectbox from '../../components/Selectbox';
import SubmitButton from '../../components/SubmitButton';
import { statusOptions } from '../../constants/mockData';

function CategoryForm({ object }) {
  const [name, setName] = useState('');
  const [active, setActive] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    setIsLoading(true);
    setErrors({});
    console.log('Form has been submitted successfully.')
  }

  return (
    <Form title='Create New Category'>
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

      <SubmitButton
        buttonText={object ? 'Update' : 'Create' }
        disabled={isLoading}
        handleClick={onSubmit}
      />
    </Form>
  )
}

export default CategoryForm;
