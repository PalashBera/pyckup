import TableHeader from './tableHeader';
import TableBody from './tableBody';
import TableRow from './tableRow';

import './table.scss';

function Table({ children }) {
  return (
    <div className='tableContainer'>
      <table>
        {children}
      </table>
    </div>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow
}
