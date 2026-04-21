function IngredientList({ ingredients, onFilterIngredient }) {
    return (
        <div>
            <label className="form-label">Ingredients</label>

            <div className="d-flex flex-wrap gap-2">
                {ingredients.map((item) => (
                    <button
                        key={item.strIngredient}
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => onFilterIngredient(item.strIngredient)}
                    >
                        {item.strIngredient}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default IngredientList