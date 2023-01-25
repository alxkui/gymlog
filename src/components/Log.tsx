import Exercise from "./Exercise";

export default function Log({ exercises }: any) {
    return (
        <div>
            <ul>
                {exercises.map((exercises: any) => (
                    <Exercise
                        key={exercises.id}
                        id={exercises.id}
                        defaultExerciseName={exercises.name}
                        defaultMax={exercises.max}
                        defaultReps={exercises.reps}
                        defaultSets={exercises.sets}
                    />
                ))}
            </ul>

        </div>
    )
}