import "./Task.css";

export default function Task({ content: string }) {
  return (
    <>
      <div className="task">
        <h4>{content}</h4>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}
