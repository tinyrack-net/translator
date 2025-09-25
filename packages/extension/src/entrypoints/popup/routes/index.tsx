import { getMathService } from '@/lib/math';
import { createFileRoute } from '@tanstack/react-router';

const mathService = getMathService();

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>

      <button
        onClick={() => {
          mathService.add(1);
        }}
      >
        add number
      </button>
    </div>
  );
}
