import { useEffect } from "react";
import cx from 'clsx';
import { Table, ActionIcon, Flex, Tooltip, Popover, Button, Checkbox } from "@mantine/core";
import { IconCheck, IconBan } from "@tabler/icons-react";
import { truncateString } from '../../utils/stringFormatting'
import classes from './RequestReceivedTable.module.css'

const COL_MAX_WIDTH=30;

const Row = ({
  id,
  createdDatetime,
  companyId,
  carbonUnitPrice,
  carbonQuantity,
  requestReason,
  requestType,
  selection,
  toggleRow
}) => {
  const selected = selection.includes(id);

  return (
    <Table.Tr key={id} className={cx({ [classes.rowSelected]: selected })}>
      <Table.Td>
        <Checkbox checked={selection.includes(id)} onChange={() => toggleRow(id)} />
      </Table.Td>
      <Table.Td>{truncateString(createdDatetime.toString(), COL_MAX_WIDTH)}</Table.Td>
      <Table.Td>{companyId}</Table.Td>
      <Table.Td>{carbonUnitPrice}</Table.Td>
      <Table.Td>{carbonQuantity}</Table.Td>
      <Table.Td>{requestReason}</Table.Td>
      <Table.Td>{requestType}</Table.Td>
      <Table.Td>
        <Flex gap={4}>
          <Tooltip label="Accept">
            <ActionIcon color="teal" variant="outline">
              <IconCheck/>
            </ActionIcon>
          </Tooltip>
          <Popover>
            <Popover.Target>
              <ActionIcon color="red" variant="outline">
                <IconBan/>
              </ActionIcon>
            </Popover.Target>

            <Popover.Dropdown style={{ padding: 0 }}>
              <Button variant="subtle" color="red">Confirm reject?</Button>
            </Popover.Dropdown>
          </Popover>
        </Flex>
      </Table.Td>
    </Table.Tr>
  )
}

// made by other companies
export default function RequestsReceivedTable({ requests, selection, toggleRow, toggleAll }) {
  const rows = requests.map((r) => <Row {...r} key={r.id} selection={selection} toggleRow={toggleRow}/>)
  useEffect(() => {
    console.log({selection})
  }, [selection])

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th w={40}>
            <Checkbox
              onChange={toggleAll}
              checked={selection.length === requests.length}
              indeterminate={selection.length > 0 && selection.length !== requests.length}
            />
          </Table.Th>
          <Table.Th>Request Date</Table.Th>
          <Table.Th>Requestor Company Name</Table.Th>
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