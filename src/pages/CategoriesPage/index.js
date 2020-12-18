import PageHeader from '../../components/PageHeader';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow
} from '../../components/Table';

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
        </TableHeader>

        <TableBody>
          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </TableRow>

          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </TableRow>

          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </TableRow>

          <TableRow>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default CategoriesPage;
