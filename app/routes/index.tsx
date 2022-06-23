import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return [{ name: "Exercise #1", type: "strength" }];
};

type Exercise = {
  name: string;
  type: string;
};

export default function Index() {
  const exercises = useLoaderData<Exercise[]>();

  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.name}>
          <div>
            <h2>{exercise.name}</h2>
            <p>{exercise.type}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
