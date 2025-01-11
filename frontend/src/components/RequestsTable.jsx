import { Table } from "@mantine/core";
import { truncateString } from '../utils/stringFormatting'

const COL_MAX_WIDTH=30;

const Row = ({
  id,
  createdDatetime,
  companyId,
  carbonUnitPrice,
  carbonQuantity,
  requestReason,
  requestType,
  actionsBuilder
}) => {
  return (
    <Table.Tr key={id}>
      <Table.Td>{truncateString(createdDatetime.toString(), COL_MAX_WIDTH)}</Table.Td>
      <Table.Td>{companyId}</Table.Td>
      <Table.Td>{carbonUnitPrice}</Table.Td>
      <Table.Td>{carbonQuantity}</Table.Td>
      <Table.Td>{requestReason}</Table.Td>
      <Table.Td>{requestType}</Table.Td>
      <Table.Td>
        {actionsBuilder(id)}
      </Table.Td>
    </Table.Tr>
  )
}

// made by YOUR company
export default function RequestsTable({ requests, actionsBuilder }) {
  const rows = requests.map((r) => <Row {...r} key={r.id} actionsBuilder={actionsBuilder}/>)

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Request Date</Table.Th>
          <Table.Th>Company Name</Table.Th>
          <Table.Th>Carbon Price</Table.Th>
          <Table.Th>Carbon Quantity</Table.Th>
          <Table.Th>Request Reason</Table.Th>
          <Table.Th>Request Type</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}