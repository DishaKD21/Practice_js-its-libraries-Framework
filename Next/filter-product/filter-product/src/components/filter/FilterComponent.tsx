"use client";
import { ChevronDown, ChevronUp, LayoutGrid, List } from 'lucide-react';
import './style.css';
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import FilterComponent from '../filter/FilterComponent';

function ProductList() {
    type FilterType = "resolution" | "system" | "size" | "priceRange";

    interface Filters {
        resolution: string;
        system: string;
        size: string;
        priceRange: number[];
    }

    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);
    const [layoutlist, setLayoutList] = useState(true);
    const [filters, setFilters] = useState<Filters>({
        resolution: "",
        system: "",
        size: "",
        priceRange: [0, 100000],
    });

    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedSize = searchParams?.get("size") ?? null;
    const selectedCategory = searchParams?.get("category") ?? null;

    const updateQueryParams = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams?.toString() ?? "");
        if (params.get(key) === value) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    const handleFilterChange = <K extends FilterType>(
        filterType: K,
        value: Filters[K]
    ) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]:
                prev[filterType] === value
                    ? (Array.isArray(value) ? ([] as Filters[K]) : ("" as Filters[K]))
                    : value,
        }));
    };

    const products = [
        { id: 1, image: "/models/tv2.png", name: "Smart TV A1", size: '42" inches', os: "Android", screenQuality: "UHD", disPrice: "₹25,000", oldPrice: "₹27,000", rating: 4.9, reviews: 24, price: 25000 },
        { id: 2, image: "/models/tv2.png", name: "Smart TV B2", size: '52" inches', os: "WebOS", screenQuality: "FHD", disPrice: "₹30,000", oldPrice: "₹35,000", rating: 4.9, reviews: 24, price: 30000 },
        { id: 3, image: "/models/tv2.png", name: "Smart TV C3", size: '32" inches', os: "Tizen", screenQuality: "HD", disPrice: "₹18,999", oldPrice: "₹25,000", rating: 4.9, reviews: 24, price: 18999 },
        { id: 4, image: "/models/tv2.png", name: "Smart TV D4", size: '50" inches', os: "Google TV", screenQuality: "UHD", disPrice: "₹35,500", oldPrice: "₹38,000", rating: 4.9, reviews: 24, price: 35500 },
        { id: 5, image: "/models/tv2.png", name: "Smart TV E5", size: '43" inches', os: "Fire OS", screenQuality: "FHD", disPrice: "₹28,000", oldPrice: "₹30,000", rating: 4.9, reviews: 24, price: 28000 },
        { id: 6, image: "/models/tv2.png", name: "Smart TV F6", size: '55" inches', os: "Android", screenQuality: "4K UHD", disPrice: "₹40,000", oldPrice: "₹45,000", rating: 4.9, reviews: 24, price: 40000 }
    ];

    const filteredProducts = products.filter(item => {
        // Existing URL param filters
        const sizeMatch = !selectedSize || item.size.includes(selectedSize);
        const categoryMatch = !selectedCategory || item.screenQuality === selectedCategory;

        // New sidebar filters
        const resolutionMatch = !filters.resolution ||
            (filters.resolution.includes('HD') && item.screenQuality.includes('HD')) ||
            (filters.resolution.includes('FHD') && item.screenQuality.includes('FHD')) ||
            (filters.resolution.includes('QHD') && item.screenQuality.includes('UHD'));

        const systemMatch = !filters.system ||
            (filters.system.includes('Android') && item.os.includes('Android')) ||
            (filters.system.includes('Web') && item.os.includes('WebOS')) ||
            (filters.system.includes('Google') && item.os.includes('Google'));

        const sizeFilterMatch = !filters.size || item.size.includes(filters.size.replace('"', ''));

        const priceMatch = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];

        return sizeMatch && categoryMatch && resolutionMatch && systemMatch && sizeFilterMatch && priceMatch;
    });

    return (
        <div className='product-container'>
            {/* Breadcrumb */}
            <div className='breadcrumb'>
                <p>Home {'>'} Product</p>
                <hr />
            </div>

            {/* Main Content Area */}
            <div className='main-content'>
                {/* Filter Sidebar */}
                <div className='filter-sidebar-container'>
                    <FilterComponent
                        onFilterChange={handleFilterChange}
                        selectedFilters={filters}
                    />
                </div>

                {/* Products Section */}
                <div className='products-section'>
                    {/* Product Navigation */}
                    <div className='product-nav'>
                        <div className='product-num'>Product {filteredProducts.length} Items</div>
                        <div className='filter'>
                            <div className='layout-buttons'>
                                <List className={`filter-icon ${layoutlist ? 'active-mode' : ''}`} onClick={() => setLayoutList(true)} />
                                <LayoutGrid className={`filter-icon ${!layoutlist ? 'active-mode' : ''}`} onClick={() => setLayoutList(false)} />
                            </div>
                            <div className='filter-buttons'>
                                <div className='dropdown'>
                                    <span onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
                                        Category {showCategoryDropdown ? <ChevronUp className='drop-down-icon' /> : <ChevronDown className='drop-down-icon' />}
                                    </span>
                                    {showCategoryDropdown && (
                                        <div className='dropdown-content'>
                                            <ul>
                                                <li onClick={() => updateQueryParams("category", "HD")}>HD</li>
                                                <li onClick={() => updateQueryParams("category", "UHD")}>UHD</li>
                                                <li onClick={() => updateQueryParams("category", "FHD")}>FHD</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className='dropdown'>
                                    <span onClick={() => setShowSizeDropdown(!showSizeDropdown)}>
                                        Size {showSizeDropdown ? <ChevronUp className='drop-down-icon' /> : <ChevronDown className='drop-down-icon' />}
                                    </span>
                                    {showSizeDropdown && (
                                        <div className='dropdown-content'>
                                            <ul>
                                                <li onClick={() => updateQueryParams("size", '32"')}>32"</li>
                                                <li onClick={() => updateQueryParams("size", '42"')}>42"</li>
                                                <li onClick={() => updateQueryParams("size", '52"')}>52"</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid/List */}
                    <div className={layoutlist ? "products-list" : "products-grid"}>
                        {filteredProducts.map((item) => (
                            <Link className="product_detailsLink" href={`/product/${item.id}`} key={item.id}>
                                <div className='products' key={item.id}>
                                    <div className='products-img'>
                                        <Image src={item.image} alt={item.name} height={200} width={300} />
                                    </div>
                                    <div className='products-details'>
                                        <h1>{item.name}</h1>
                                        <p>{item.size}</p>
                                        <p>{item.os}</p>
                                        <p>{item.screenQuality}</p>
                                    </div>
                                    <div className='more-details'>
                                        <p>{item.disPrice}</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList; 