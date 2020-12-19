import { useState } from 'react';
import Form from '../../components/Form';
import Textbox from '../../components/Textbox';
import Selectbox from '../../components/Selectbox';
import SubmitButton from '../../components/SubmitButton';
import { ButtonGroup, Button } from '../../components/Button';
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

      <ButtonGroup>
        <Button
          title='Cancel'
          url='/categories'
          formButton
        />

        <SubmitButton
          buttonText={object ? 'Update' : 'Create' }
          disabled={isLoading}
          handleClick={onSubmit}
        />
      </ButtonGroup>
    </Form>
  )
}

export default CategoryForm;
