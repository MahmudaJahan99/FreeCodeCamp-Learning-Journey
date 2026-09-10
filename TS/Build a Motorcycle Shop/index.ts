// Type definition for motorcycle categories
type Category =
  | "Sport"
  | "Cruiser"
  | "Touring"
  | "Dirt"
  | "Adventure"
  | "Naked"
  | "Electric";

// Interface for Motorcycle object
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
  horsepower?: number;
}

// Fetch motorcycles from API
async function fetchMotorcycles(): Promise<Motorcycle[]> {
  try {
    const response = await fetch(
      "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json",
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch motorcycles`);
    }

    const data = await response.json();

    return data.map((motorcycle: any) => ({
      ...motorcycle,
      created_at: new Date(motorcycle.created_at),
    }));
  } catch (error) {
    console.error("Error fetching motorcycles:", error);
    throw error;
  }
}

// Render a single motorcycle card
function renderMotorcycleCard(motorcycle: Motorcycle): string {
  return `
  <div class="motorcycle-card">
    <div class="motorcycle-card-image-container">
        <img src="${motorcycle.image_url}" alt="${motorcycle.name}" class="motorcycle-card-image" />
        <div class="motorcycle-card-year-badge">${motorcycle.year}</div>
    </div>

    <div class="motorcycle-card-content">
        <div class="motorcycle-card-header">
            <div>
                <h3 class="motorcycle-card-title">${motorcycle.name}</h3>
                <p class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</p>
            </div>

            <span class="motorcycle-card-category">${motorcycle.category}</span>
        </div>

        <p class="motorcycle-card-description">${motorcycle.description}</p>

        <div class="motorcycle-card-footer">
            <div>
                <p class="motorcycle-card-price">$${motorcycle.price.toLocaleString()}</p>
                <p class="motorcycle-card-engine">${motorcycle.horsepower}cc</p>
            </div>

            <button class="motorcycle-card-button" data-motorcycle-id="${motorcycle.id}">View Details</button>
        </div>
    </div>
  </div>
    `;
}

// Main application class for the motorcycle gallery
class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];
  private filteredMotorcycles: Motorcycle[] = [];
  private nameFilter: string = "";

  // The constructor runs automatically when new MotorcycleGalleryApp() is created.
  constructor() {
    this.init();
  }

  // Initializes the application.
  private async init(): Promise<void> {
    await this.loadMotorcycles(); // First we load the motorcycles.
    this.setupEventListeners(); // Then we set up the search input.
    this.render(); // Finally we render the motorcycles on the page.
  }

  // Fetches motorcycle data and stores it in allMotorcycles.
  private async loadMotorcycles(): Promise<void> {
    this.showLoading(true);

    try {
      const data = await fetchMotorcycles();
      this.allMotorcycles = [...data];
      this.applyFilters();
    } catch (error) {
      console.error("Error loading motorcycles:", error);
    } finally {
      this.showLoading(false);
    }
  }

  //   Applies the current filters to the list of motorcycles and updates the filteredMotorcycles array.
  private applyFilters(): void {
    this.filteredMotorcycles = this.allMotorcycles.filter((motorcycle) => {
      const matchesName =
        this.nameFilter === "" ||
        motorcycle.name.toLowerCase().includes(this.nameFilter.toLowerCase());
      return matchesName;
    });
    this.render();
  }

  //   Sets up event listeners for the search input.
  private setupEventListeners(): void {
    const nameFilterInput = document.getElementById(
      "name-filter-input",
    ) as HTMLInputElement;
    if (nameFilterInput) {
      nameFilterInput.addEventListener("input", (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.nameFilter = target.value;
        this.applyFilters();
      });
    }
  }

  //   Renders the results count and the motorcycle cards on the page.
  private render(): void {
    this.renderResultsCount();
    this.renderMotorcycles();
  }

  //   Renders the count of filtered motorcycles on the page.
  private renderResultsCount(): void {
    const resultsNumber = document.getElementById("results-number");
    if (resultsNumber) {
      resultsNumber.textContent = this.filteredMotorcycles.length.toString();
    }
  }

  //   Renders the motorcycle cards based on the filteredMotorcycles array. If there are no motorcycles to display, it shows a "no results" message.
  private renderMotorcycles(): void {
    const container = document.getElementById("motorcycle-grid");
    const noResults = document.getElementById("no-results");
    if (!container) return;
    if (this.filteredMotorcycles.length === 0) {
      container.style.display = "none";
      if (noResults) {
        noResults.style.display = "block";
      }
      return;
    }
    if (noResults) {
      noResults.style.display = "none";
    }
    container.style.display = "grid";
    container.innerHTML = this.filteredMotorcycles
      .map((motorcycle) => renderMotorcycleCard(motorcycle))
      .join("");
  }

  //   Shows or hides the loading indicator based on the show parameter. When show is true, the loading indicator is displayed and the motorcycle grid is hidden. When show is false, the loading indicator is hidden and the motorcycle grid is displayed.
  private showLoading(show: boolean): void {
    const loadingContainer = document.getElementById("loading-container");
    const motorcycleGrid = document.getElementById("motorcycle-grid");
    if (loadingContainer) {
      loadingContainer.style.display = show ? "flex" : "none";
    }
    if (motorcycleGrid) {
      motorcycleGrid.style.display = show ? "none" : "grid";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new MotorcycleGalleryApp();
});
