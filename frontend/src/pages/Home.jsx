import { useContext } from "react"
import { CompanyContext } from "../contexts/company.context"
import { Stack, Title, Blockquote, Flex, ActionIcon, Tooltip, Popover, Button } from "@mantine/core"
import RequestsTable from "../components/RequestsTable"
import { IconCirclePlus, IconTrash, IconEdit } from "@tabler/icons-react"

const sampleOutstandingRequests = [
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

export default function Home() {
  const { companyInfo } = useContext(CompanyContext)

  return (
    <>
      <Stack>
        <Title order={2}>Good afternoon, {companyInfo.companyName}</Title>
        <Title order={4}>Your outstanding balances</Title>
        <Flex gap="lg">
          <Blockquote color="teal">
            Carbon credits: {companyInfo.carbonBalance}
          </Blockquote>
          <Blockquote>
            Cash balances: {companyInfo.cashBalance}
          </Blockquote>
        </Flex>
        <Stack>
          <Flex justify="space-between" align="center">
            <Title order={4}>Your outstanding requests</Title>
            <Tooltip label="Create a new request">
              <ActionIcon color="teal" size="lg">
                <IconCirclePlus />
              </ActionIcon>
            </Tooltip>
          </Flex>
          <RequestsTable requests={sampleOutstandingRequests} actionsBuilder={(id) => (
            <Flex gap={4}>
              <Tooltip label="Edit Request">
                <ActionIcon variant="filled">
                  <IconEdit/>
                </ActionIcon>
              </Tooltip>
              <Popover>
                <Popover.Target>
                  <ActionIcon color="red" variant="filled">
                    <IconTrash/>
                  </ActionIcon>
                </Popover.Target>
    
                <Popover.Dropdown style={{ padding: 0 }}>
                  <Button variant="subtle" color="red">Confirm delete?</Button>
                </Popover.Dropdown>
              </Popover>
            </Flex>
          )}/>
        </Stack>
      </Stack>
    </>
  )
}