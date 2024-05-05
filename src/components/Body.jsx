import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";
import PostForm from "./forms/PostForm";

export default function Body({ sidebar, children }) {

  return (
    <Container>
      <Stack direction="horizontal">
        {sidebar && <Sidebar />}
        <div className="flex-center">
          {sidebar && <PostForm />}
          {children}
        </div>
      </Stack>
    </Container>
  )
}