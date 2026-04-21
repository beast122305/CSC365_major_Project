function AreaList({ areas, onFilterArea }) {
  return (
    <select
      className="form-select"
      onChange={(e) => onFilterArea(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Filter by Area
      </option>
      {areas.map((area, index) => (
        <option key={index} value={area.strArea}>
          {area.strArea}
        </option>
      ))}
    </select>
  )
}

export default AreaList