function CategoryList({ categories, onFilterCategory }) {
  return (
    <select
      className="form-select"
      onChange={(e) => onFilterCategory(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Filter by Category
      </option>
      {categories.map((cat, index) => (
        <option key={index} value={cat.strCategory}>
          {cat.strCategory}
        </option>
      ))}
    </select>
  )
}

export default CategoryList