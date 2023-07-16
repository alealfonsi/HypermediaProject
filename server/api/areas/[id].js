import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    //const { data :ret1, error }= await client.from('area').select("name,description").eq('name',name).limit(1).single()
    const { data , error }= await client
        .rpc('get_projects_with_concerns', { areaid: name });
    if(error  ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})