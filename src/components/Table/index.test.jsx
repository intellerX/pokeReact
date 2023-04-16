import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Table from ".";

const pokemons = [
  {
    "id": 1,
    "name": "Pokemon1_Test",
    "image": "image1",
    "attack": 2,
    "defense": 3,
  },
  {
    "id": 4,
    "name": "Pokemon2_Test",
    "image": "image2",
    "attack": 5,
    "defense": 6,
  }
]

const handleEditFn = jest.fn(() => { });
const handleDeleteFn = jest.fn(() => { });

test("should display a list of pokemons in the table", async () => {
  render(<Table pokemons={pokemons} handleEdit={handleEditFn} handleDelete={handleDeleteFn} />)

  const rows = screen.getAllByRole('row')
  expect(rows).toHaveLength(3); // table header and two rows

  const nameCells = screen.getAllByRole('cell')
  const nameCellsText = nameCells.map((item) => item.textContent)
  expect(nameCellsText).toEqual(["Pokemon1_Test", "", "2", "3", "edit.svgdelete.svg", "Pokemon2_Test", "", "5", "6", "edit.svgdelete.svg"])
})

test("should execute the functions according to the edit or delete action", async () => {
  const user = userEvent.setup();
  render(<Table pokemons={pokemons} handleEdit={handleEditFn} handleDelete={handleDeleteFn} />)

  const editBtn = screen.getAllByRole("img", { name: /edit-icon/i })
  expect(editBtn[0]).toBeInTheDocument()

  await user.click(editBtn[0]);
  expect(handleEditFn).toBeCalled();

  const deleteBtn = screen.getAllByRole("img", { name: /delete-icon/i })
  expect(deleteBtn[0]).toBeInTheDocument()
})
