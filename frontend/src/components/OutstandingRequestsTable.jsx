import { useState } from "react";
import { Table, ActionIcon, Flex, Tooltip, Popover, Button, Modal } from "@mantine/core";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { truncateString } from "../utils/stringFormatting";

const COL_MAX_WIDTH = 30;

const Row = ({
  id,
  createdDatetime,
  companyId,
  carbonUnitPrice,
  carbonQuantity,
  requestReason,
  requestType,
}) => {
  const [deletePopoverOpened, setDeletePopoverOpened] = useState(false); // For Delete Popover
  const [editModalOpened, setEditModalOpened] = useState(false); // For Edit Modal

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
          {/* Edit Button */}
          <Tooltip label="Edit Request">
            <ActionIcon
              variant="filled"
              onClick={() => setEditModalOpened(true)} // Open Edit Modal
            >
              <IconEdit />
            </ActionIcon>
          </Tooltip>

          {/* Delete Button */}
          <Popover
            opened={deletePopoverOpened}
            onChange={setDeletePopoverOpened}
          >
            <Popover.Target>
              <ActionIcon
                color="red"
                variant="filled"
                onClick={() => setDeletePopoverOpened((o) => !o)}
              >
                <IconTrash />
              </ActionIcon>
            </Popover.Target>

            <Popover.Dropdown style={{ padding: 0 }}>
              <Button
                variant="subtle"
                color="red"
                onClick={() => console.log(`Delete request ${id}`)}
              >
                Confirm delete?
              </Button>
            </Popover.Dropdown>
          </Popover>

          {/* Edit Modal */}
          <Modal
            opened={editModalOpened}
            onClose={() => setEditModalOpened(false)} // Close Modal
            title="Edit Request"
            centered
          >
            <div>
              {/* Modal Content */}
              <p>Edit the details of the request here:</p>
              <p>Company ID: {companyId}</p>
              <p>Request Type: {requestType}</p>
              <Button
                onClick={() => {
                  console.log(`Edit request ${id}`);
                  setEditModalOpened(false); // Close modal after action
                }}
              >
                Save Changes
              </Button>
            </div>
          </Modal>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};

// Main Component
export default function OutstandingRequestsTable({ requests }) {
  const rows = requests.map((r) => <Row {...r} key={r.id}/>)

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
  );
}

