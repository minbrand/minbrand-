
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock } from 'lucide-react';

interface ModuleCardProps {
  id: number;
  title: string;
  lessons: number;
  image: string;
  description: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ id, title, lessons, image, description }) => {
  return (
    <Link to={`/module/${id}`} className="group">
      <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-[#FFDD79] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-white">
              <PlayCircle className="w-6 h-6 mr-2 text-[#28ffbb]" />
              <span className="text-sm font-medium">Assistir Módulo</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#FFDD79] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-[#FFDD79]">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              {lessons} {lessons === 1 ? 'aula' : 'aulas'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
