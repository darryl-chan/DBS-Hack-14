import { useState } from "react";
import { Table, ActionIcon, Flex, Tooltip, Popover, Button } from "@mantine/core";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { truncateString } from '../utils/stringFormatting'

const COL_MAX_WIDTH=30;

const Row = ({
  id,
  createdDatetime,
  companyId,
  carbonUnitPrice,
  carbonQuantity,
  requestReason,
  requestType
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Table.Tr key={id}>
      <Table.Td>{truncateString(createdDatetime.toString(), COL_MAX_WIDTH)}</Table.Td>
      <Table.Td>{companyId}</Table.Td>
      <Table.Td>{carbonUnitPrice}</Table.Td>
      <Table.Td>{carbonQuantity}</Table.Td>
      <Table.Td>{requestReason}</Table.Td>
      <Table.Td>{requestType}</Table.Td>
      <Table.Td>
        <Flex gap={4}>
          <Tooltip label="Edit Request">
            <ActionIcon variant="filled">
              <IconEdit/>
            </ActionIcon>
          </Tooltip>
          <Popover opened={opened} onChange={setOpened}>
            <Popover.Target>
              <ActionIcon color="red" variant="filled" onClick={() => setOpened((o) => !o)}>
                <IconTrash/>
              </ActionIcon>
            </Popover.Target>

            <Popover.Dropdown style={{ padding: 0 }}>
              <Button variant="subtle" color="red">Confirm delete?</Button>
            </Popover.Dropdown>
          </Popover>
        </Flex>
      </Table.Td>
    </Table.Tr>
  )
}

// made by YOUR company
export default function OutstandingRequestsTable({ requests }) {
  const rows = requests.map((r) => <Row {...r}/>)

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