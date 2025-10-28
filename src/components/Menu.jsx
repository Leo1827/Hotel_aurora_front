import React, { useState } from "react";
import IconList from "./IconList";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // iconos hamburguesa y cerrar

const MenuNav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "Destino 1") {
      navigate("/landing");
    } else if (value === "Destino 2") {
      navigate("/cart");
    }
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-semibold text-teal-600 tracking-wide"
        >
          Aurora<span className="text-gray-800">APP</span>
        </Link>

        {/* SELECT centrado */}
        <div className="hidden md:flex flex-1 justify-center">
          <select
            className="bg-gray-100 border-2 border-teal-500 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={handleSelectChange}
          >
            <option value="1">Encuentra tu destino ideal</option>
            <option value="Destino 1">Destino 1</option>
            <option value="Destino 2">Destino 2</option>
            <option value="3">Destino 3</option>
          </select>
        </div>

        {/* ICONOS + BOTÓN HAMBURGUESA */}
        <div className="flex items-center space-x-6">
          {/* ICONOS desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
            >
              <IconList icon="cart-shopping" color="#00AA96" size="sm" />
              <span className="ml-2">Cesta</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
            >
              <IconList icon="user" color="#00AA96" size="sm" />
              <span className="ml-2">Tu cuenta</span>
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA móvil */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="flex flex-col items-center space-y-4 py-4">
            <select
              className="w-11/12 bg-gray-100 mb-3 border-2 border-teal-500 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              onChange={handleSelectChange}
            >
              <option value="1">Encuentra tu destino ideal</option>
              <option value="Destino 1">Destino 1</option>
              <option value="Destino 2">Destino 2</option>
              <option value="3">Destino 3</option>
            </select>

            <div className="flex gap-5">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <IconList icon="cart-shopping" color="#00AA96" size="sm" />
                <span className="ml-2">Cesta</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
              >
                <IconList icon="user" color="#00AA96" size="sm" />
                <span className="ml-2">Tu cuenta</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuNav;
