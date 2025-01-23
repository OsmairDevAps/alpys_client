import { supabase } from "./supabase";
import { IOrder } from "../constants/interface";

export function useCategorySupabase() {

  async function list() {
    try {
      const { data } = await supabase
        .from('products')
        .select('category')
      return data
    } catch (error) {
      throw error
    }
  }
  
  async function searchById(id: number) {
    try {
      const { data } = await supabase.from('orders').select('*').eq('id', id)
      return data
    } catch (error) {
      throw error
    }
  }
  
  async function searchByName(clientname: string) {
    try {
      const { data } = await supabase.from('orders').select('*').like('client_name', clientname)
      return data
    } catch (error) {
      throw error
    }
  }

  return { list, searchById, searchByName }
}