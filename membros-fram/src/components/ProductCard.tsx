
import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';

interface ProductCardProps {
  title: string;
  image: string;
  checkout: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, checkout }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-[#FFDD79] transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <Lock className="w-8 h-8 text-[#FFDD79] mx-auto mb-2" />
            <span className="text-white text-sm font-medium">Produto Exclusivo</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-white text-lg font-bold mb-4 line-clamp-2">
          {title}
        </h3>
        
        <a
          href={checkout}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#28ffbb] hover:bg-[#28ffbb]/90 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group"
        >
          <span>Acessar Oferta</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
