import {
  Wrapper,
  Title,
  ListContainer,
  TodoItem,
  TodoTitle,
  TodoPriority,
  TodoInformation,
} from '@/components/Todos/Todos.styles.ts';

interface TodosProps {
  todos: {
    id: string;
    title: string;
    priority: string;
    assignedTo: string;
  }[];
}

const priorityColor: Record<string, string> = {
  low: '#4caf50',
  medium: '#ff9800',
  high: '#f44336',
};

const Todos = ({ todos }: TodosProps) => {
  return (
    <Wrapper>
      <Title>Todos</Title>
      <ListContainer>
        {todos.map(({ id, title, priority, assignedTo }) => (
          <TodoItem key={id}>
            <TodoInformation>
              <TodoTitle>{title}</TodoTitle>
              <TodoPriority>{assignedTo}</TodoPriority>
            </TodoInformation>
            <TodoPriority sx={{ color: priorityColor[priority] }}>
              [{priority.toUpperCase()}]
            </TodoPriority>
          </TodoItem>
        ))}
      </ListContainer>
    </Wrapper>
  );
};

export default Todos;
