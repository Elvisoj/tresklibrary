import { supabase } from "./supabaseClient";

const fetchCourses = async (setCourses) => {
    const { data, error } = await supabase.from("courses").select("*");
    if (error) {
    console.error("Error fetching courses:", error.message);
    } else {
    setCourses(data);
    console.log(data);
    }
};
export default fetchCourses