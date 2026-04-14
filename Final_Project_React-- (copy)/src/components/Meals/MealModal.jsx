import { extractIngredients, getIngredientImageSmall } from '../../utils/helpers'

function MealModal({ meal, onClose }) {
    if (!meal) return null

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{meal.strMeal}</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        <img
                            src={meal.strMealThumb}
                            className="img-fluid rounded mb-3"
                            alt={meal.strMeal}
                        />

                        <p>
                            <strong>Category:</strong> {meal.strCategory}
                        </p>

                        <p>
                            <strong>Area:</strong> {meal.strArea}
                        </p>

                        <p>
                            <strong>Instructions:</strong> {meal.strInstructions}
                        </p>

                        <h6 className="mt-3">Ingredients</h6>

                        <ul className="list-group">
                            {extractIngredients(meal).map((item, index) => (
                                <li
                                    key={`${item.ingredient}-${index}`}
                                    className="list-group-item d-flex align-items-center gap-3"
                                >
                                    <img
                                        src={getIngredientImageSmall(item.ingredient)}
                                        alt={item.ingredient}
                                        width="40"
                                    />
                                    <span>
                                        {item.ingredient} - {item.measure}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {meal.strYoutube && (
                            <div className="mt-3">
                                <a
                                    href={meal.strYoutube}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-danger"
                                >
                                    Watch on YouTube
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealModal