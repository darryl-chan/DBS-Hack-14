import { useContext,useState } from "react"
import { CompanyContext } from "../contexts/company.context"
import {Button, Stack, Title, Blockquote, Flex, ActionIcon, Tooltip, Modal } from "@mantine/core"
import OutstandingRequestsTable from "../components/OutstandingRequestsTable"
import { IconCirclePlus } from "@tabler/icons-react"
import CreateRequest from "../components/CreateRequest"

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
  const [editModalOpened, setEditModalOpened] = useState(true); // For Edit Modal
  

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
              <ActionIcon color="teal" size="lg"
              onClick={() => setEditModalOpened(true)}>



          
                <IconCirclePlus />
              </ActionIcon>
            </Tooltip>


            <Modal
            opened={editModalOpened}
            onClose={() => setEditModalOpened(false)} // Close Modal
            title="Create Request"
            centered
          >
            <div>

         

              {/* Modal Content */}

              <CreateRequest>
       
              <p>Create request here:</p>
              <p>Request Date: </p>
              <p>Company Name: </p>
              <p>Carbon Price SGD/Tonnes:</p>
              <p>Carbon Quantity: </p>
              <p>Requesting Reason: </p>
              <p>Request Type: </p>  

              </CreateRequest>

  
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
          <OutstandingRequestsTable requests={sampleOutstandingRequests}/>
        </Stack>
      </Stack>
     
    </>
  )
}