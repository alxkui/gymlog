import { useState } from "react";
import Editable from "./Editable";
import { supabase } from '../../lib/supabaseClient';
import { FcCheckmark, FcCancel, FcEmptyTrash } from 'react-icons/fc'
import Success from "./Success";
import { useRouter } from "next/router";

export default function Exercise({ defaultExerciseName, defaultMax, defaultReps, defaultSets, id }: any) {

    const [active, setActive] = useState(false);

    const [exerciseName, setExerciseName] = useState(defaultExerciseName);
    const [max, setMax] = useState(defaultMax);
    const [reps, setReps] = useState(defaultReps);
    const [sets, setSets] = useState(defaultSets);
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleOnExerciseNameChange = (e: any) => {
        setExerciseName((prev: string) => prev = e.target.value);
    }

    const handleOnMaxChange = (e: any) => {
        setMax((prev: number) => prev = e.target.value);
    }

    const handleOnRepsChange = (e: any) => {
        setReps((prev: number) => prev = e.target.value);
    }

    const handleOnSetsChange = (e: any) => {
        setSets((prev: number) => prev = e.target.value);
    }

    const handleFocusOnExercise = () => {
        setActive(true);
    }

    const handleCancel = (e: any) => {
        if(e?.relatedTarget?.nodeName === "BUTTON") return;
        setActive(false);
    }

    const handleDelete = async () => {
        const { error } = await supabase.from("exercises").delete().eq('id', id);
    
        if(error) {
            console.log(error);
            return;
        }

        setSuccess(prev => prev = "Exercise Deleted!");
        router.reload();
    }

    const handleUpdateExercise = async () => {
        const { error } = await supabase.from("exercises").update({
            name: exerciseName,
            reps,
            sets,
            max
        }).eq('id', id);

        if(error) {
            console.log(error);
            return;
        }

        setActive(prev => prev = false);
        setSuccess(prev => prev = "Exercise Updated!");

    }

    return (
        <>
        { success && <Success message={success} /> }
            <div
                onFocus={handleFocusOnExercise}
                onBlur={handleCancel}
                className="exercise-border relative border-solid border-2 rounded-md py-2 px-1 my-5 w-full flex content-between justify-between">

                <div id="exercise-name" className="inline-block">
                    <Editable
                        onChange={handleOnExerciseNameChange}
                        value={exerciseName}
                        type="text"
                    />
                </div>


                <div id="exercise-numerics" className="inline-block">
                    <Editable
                        onChange={handleOnMaxChange}
                        value={max}
                        type="number"
                    />
                    <Editable
                        onChange={handleOnRepsChange}
                        value={reps}
                        type="number"
                    />
                    <span>x</span>
                    <Editable
                        onChange={handleOnSetsChange}
                        value={sets}
                        type="number"
                    />
                </div>

            </div>

            {
                    active && (
                    <div className="bottom-prompt">
                        <button onClick={handleUpdateExercise} onTouchEnd={handleUpdateExercise} className="btn"><FcCheckmark size={30} /></button>
                        <button onClick={handleCancel} className="btn cancel"><FcCancel size={30} /></button>
                        <button onClick={handleDelete} className="btn cancel"><FcEmptyTrash size={30} /></button>
                    </div>
                )
            }
        </>
    )
}
