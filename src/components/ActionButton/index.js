import EditAction from './editAction';
import DeleteAction from './deleteAction';
import DetailsAction from './detailsAction';

import './actionButton.scss';

function ActionButtonGroup({ children }) {
  return (
    <div className='actionButtonGroup'>
      {children}
    </div>
  )
}

export {
  EditAction,
  DeleteAction,
  DetailsAction,
  ActionButtonGroup
}
