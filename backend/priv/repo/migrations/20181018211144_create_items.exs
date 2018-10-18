defmodule Backend.Repo.Migrations.CreateItems do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :title, :string
      add :description, :string
      add :price, :integer
      add :status, :string
      add :onlyVisibleToFaculty, :boolean, default: false, null: false

      timestamps()
    end

  end
end