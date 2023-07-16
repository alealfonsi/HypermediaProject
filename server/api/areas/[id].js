import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    //const ret=[];
    const { ret, error }= await client.from('area').select("name,description").eq('name', name).limit(1).single()
    //const { data2, error1 }= await client.from('project').select("name,presentation,location,date,start_up,product_service,relevant").eq("project_name","name").eq("area_name",name)
    //ret.push(data1);
    //ret.push(data2);
    if(error ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return ret
})