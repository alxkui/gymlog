import Editable from "@/components/Editable";
import Success from "@/components/Success";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Add() {
    const [exerciseName, setExerciseName] = useState("Excercise Name");
    const [max, setMax] = useState(120);
    const [reps, setReps] = useState(10);
    const [sets, setSets] = useState(4);
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleNewExercise = async () => {
        const { error } = await supabase.from('exercises').insert({
            name: exerciseName,
            max,
            reps,
            sets
        });

        if(error) {
            console.log(error);
            return;
        }

        setSuccess(prev => prev = "Exercise created!");
        router.push('/');

    }

    return (
        <div className="flex flex-col justify-center items-center">
            { success && <Success message={success} /> }
            <h2 className="text-2xl">New exercise</h2>

            <div className="my-2 mt-6">
                <span>Exercise Name: </span>
                <Editable
                    value={exerciseName}
                    type="text"
                    onChange={(e: any, val: string) => setExerciseName(prev => prev = e.target.value)}
                />
            </div>

            <div className="my-2">
                <span>Current Weight: </span>
                <Editable
                    value={max}
                    type="number"
                    onChange={(e: any, val: number) => setMax(prev => prev = e.target.value)}
                />
            </div>

            <div className="my-2">
                <span>Repetitions: </span>
                <Editable
                    value={reps}
                    type="number"
                    onChange={(e: any, val: number) => setReps(prev => prev = e.target.value)}
                />
            </div>
            <div className="my-2">
                <span>Sets: </span>
                <Editable
                    value={sets}
                    type="number"
                    onChange={(e: any, val: number) => setSets(prev => prev = e.target.value)}
                />
            </div>

            <div>
                <button onClick={handleNewExercise} className="exercise-add text-center">Create</button>
            </div>
        </div>
    )
}
