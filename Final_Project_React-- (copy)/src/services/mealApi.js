const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

async function fetchJson(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

export async function searchMealsByName(name) {
  return fetchJson(`${BASE_URL}/search.php?s=${encodeURIComponent(name)}`)
}

export async function lookupMealById(id) {
  return fetchJson(`${BASE_URL}/lookup.php?i=${id}`)
}

export async function listCategories() {
  return fetchJson(`${BASE_URL}/list.php?c=list`)
}

export async function listAreas() {
  return fetchJson(`${BASE_URL}/list.php?a=list`)
}

export async function listIngredients() {
  return fetchJson(`${BASE_URL}/list.php?i=list`)
}

export async function filterByCategory(category) {
  return fetchJson(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`)
}

export async function filterByArea(area) {
  return fetchJson(`${BASE_URL}/filter.php?a=${encodeURIComponent(area)}`)
}

export async function filterByIngredient(ingredient) {
  return fetchJson(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`)
}