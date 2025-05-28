
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Star, Gift } from 'lucide-react';
import ModuleCard from './ModuleCard';
import ProductCard from './ProductCard';

const Dashboard = () => {
  const { logout } = useAuth();

  const modules = [
    {
      id: 1,
      title: 'Framework de Validação',
      lessons: 4,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
      description: 'Aprenda o framework completo para validar suas ofertas e garantir o sucesso dos seus lançamentos.'
    },
    {
      id: 2,
      title: 'Roteiro de Criativos que Convertem',
      lessons: 2,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop',
      description: 'Descubra como criar criativos que realmente convertem e geram resultados para o seu negócio.'
    },
    {
      id: 3,
      title: 'Prompts para IA Trabalhar pra Você',
      lessons: 1,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop',
      description: 'Aprenda a usar prompts eficazes para fazer a Inteligência Artificial trabalhar a seu favor.'
    },
    {
      id: 4,
      title: 'Calculadora de Métricas',
      lessons: 1,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop',
      description: 'Domine as métricas essenciais e aprenda a calcular o sucesso dos seus projetos.'
    }
  ];

  const products = [
    {
      title: 'O Lado Negro do Marketing - Você rico em até 2 anos ou menos',
      image: 'https://static-media.hotmart.com/UGy-igNBFYwykNJ68afvM_dCiu0=/300x300/filters:quality(100)/hotmart/product_pictures/fb88a1cb-fef6-4782-a12b-d302a9ba0bdd/oladonegro.png',
      checkout: 'https://sl.minbrand.com/lado-negro/'
    },
    {
      title: 'Minwrite - Acesse ao aulão onde eu escrevo copy ao vivo',
      image: 'https://static-media.hotmart.com/99k6zb3SBQz7hez34xsOIrtrSVw=/300x300/filters:quality(100)/hotmart/product_pictures/d4879834-f040-490f-94f2-779feea13755/Designsemnome34.jpg',
      checkout: 'https://cx.minbrand.com/p/minwrite.html?src=areademembros'
    }
  ];

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFDD79] to-[#bd8f08] rounded-lg flex items-center justify-center">
              <img 
                src="https://raw.githubusercontent.com/minbrand/minbrand-/refs/heads/main/img/minbrand-b.webp" 
                alt="Minbrand" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Framework de Validação</h1>
              <p className="text-gray-400 text-sm">Área de Membros Exclusiva</p>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bem-vindo ao <span className="text-[#FFDD79]">Framework de Validação de Ofertas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Acesse todos os módulos do curso criado pelo Jota e transforme a forma como você valida e lança suas ofertas no mercado.
          </p>
        </div>

        {/* Modules Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="w-6 h-6 text-[#FFDD79] mr-3" />
            Módulos do Curso
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <ModuleCard key={module.id} {...module} />
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Gift className="w-6 h-6 text-[#FFDD79] mr-3" />
            Ofertas Exclusivas para Membros
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
