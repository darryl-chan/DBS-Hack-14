import { useContext, useState } from "react"
import { CompanyContext } from "../contexts/company.context"
import { Stack, Title, Flex, Button, Modal } from "@mantine/core"
import { IconChecks, IconBan } from "@tabler/icons-react"
import RequestsReceivedTable from "../components/RequestsReceivedTable/RequestsReceivedTable"
import { useDisclosure } from '@mantine/hooks';

const requests = [
  {
    id: "1",
    companyId: "123",
    requestorCompanyId: "",
    carbonUnitPrice: 0,
    carbonQuantity: 0,
    requestReason: 0,
    requestStatus: 0,
    requestType: 0,
    createdDatetime: new Date(),
    updatedDatetime: new Date()
  },
  {
    id: "2",
    companyId: "234",
    requestorCompanyId: "",
    carbonUnitPrice: 0,
    carbonQuantity: 0,
    requestReason: 0,
    requestStatus: 0,
    requestType: 0,
    createdDatetime: new Date(),
    updatedDatetime: new Date()
  },
]

export default function Requests() {
  const { companyInfo } = useContext(CompanyContext);
  const [overdueOpened, { overdueOpen, overdueClose }] = useDisclosure(false);
  const [selection, setSelection] = useState([]);
    const toggleRow = (id) =>
      setSelection((current) =>
        current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
      );
    const toggleAll = () =>
      setSelection((current) => (current.length === requests.length ? [] : requests.map((item) => item.id)));

  // TODO: pass down accept/reject callback as prop to action row
  
  return (
    <>
      <Stack>
        <Flex justify="space-between" align="center">
          <Title order={4}>Your outstanding requests</Title>
          <Button.Group style={{ gap: 2 }}>
            <Button
              color="teal"
              disabled={selection.length === 0}
              leftSection={<IconChecks/>}
            >
              Bulk Accept
            </Button>
            <Button
              color="red"
              disabled={selection.length === 0}
              leftSection={<IconBan/>}
            >
              Bulk Reject
            </Button>
          </Button.Group>
        </Flex>
        <RequestsReceivedTable
          requests={requests}
          selection={selection}
          toggleRow={toggleRow}
          toggleAll={toggleAll}
        />
      </Stack>

      <Modal
        opened={overdueOpened}
        onClose={overdueClose}
        title="Overdue Requests (over 7 days)"
        centered
      >
        OVERDUE REQUESTS
      </Modal>
    </>
  )
}