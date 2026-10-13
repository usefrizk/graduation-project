// Same formulas as the SRS / Technical Design Document (section 6).
const GOAL_ADJUST = { cut: -450, bulk: 300, fitness: 0 }

export const bmi = (weight, height) => +(weight / (height / 100) ** 2).toFixed(1)

// days = number of training days per week
export function targets({ weight, height, age, sex, goal, days }) {
  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161)
  const tdee = bmr * (1.2 + 0.075 * days)
  const kcal = Math.round((tdee + GOAL_ADJUST[goal]) / 50) * 50
  const protein = Math.round(weight * 1.6)
  const fat = Math.round((kcal * 0.25) / 9)
  const carbs = Math.round((kcal - protein * 4 - fat * 9) / 4)
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), kcal, protein, fat, carbs }
}
