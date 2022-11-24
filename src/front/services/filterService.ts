import Axios from 'axios'

export async function getFilter(skus: string) {
  const filter = await Axios.get('api/filter', { params: { skus } })
  return filter.data
}
