import { supabase } from "../config/supabaseClient";

export const uploadFile = async (file) => {
    const filePath = `uploads/${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
        .from('coursefiles')
        .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
        });

    if (error) {
        throw new Error(error.message);
    }

    // Construct the public URL
    const { data: urlData, error: urlError } = supabase.storage
        .from('coursefiles')
        .getPublicUrl(filePath);

    if (urlError) {
        throw new Error('Error fetching public URL:', urlError.message);
    }

    return urlData.publicUrl;
};

