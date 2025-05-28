
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ExternalLink } from 'lucide-react';

interface Lesson {
  title: string;
  description: string;
  videoUrl: string;
  videoId: string;
  duration: string;
  externalLink?: {
    url: string;
    text: string;
  };
}

interface ModuleData {
  title: string;
  description: string;
  lessons: Lesson[];
}

const ModulePage = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);

  const moduleData: Record<string, ModuleData> = {
    '1': {
      title: 'Framework de Validação',
      description: 'Aprenda o framework completo para validar suas ofertas e garantir o sucesso dos seus lançamentos.',
      lessons: [
        {
          title: 'Introdução ao Framework',
          description: 'Entenda os fundamentos da validação de ofertas e como aplicar esse conhecimento no seu negócio.',
          videoUrl: 'https://youtu.be/479rtxoUNDQ',
          videoId: '479rtxoUNDQ',
          duration: '15 min',
          externalLink: {
            url: 'https://minbrand.com/recursos',
            text: 'Baixar Recursos Extras'
          }
        },
        {
          title: 'Pesquisa de Mercado',
          description: 'Como realizar uma pesquisa eficaz do seu mercado e identificar oportunidades.',
          videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
          videoId: 'dQw4w9WgXcQ',
          duration: '22 min'
        },
        {
          title: 'Análise de Concorrência',
          description: 'Técnicas para analisar seus concorrentes e se posicionar melhor no mercado.',
          videoUrl: 'https://youtu.be/ScMzIvxBSi4',
          videoId: 'ScMzIvxBSi4',
          duration: '18 min'
        },
        {
          title: 'Validação Prática',
          description: 'Aplicando o framework na prática com casos reais e exemplos.',
          videoUrl: 'https://youtu.be/kJQP7kiw5Fk',
          videoId: 'kJQP7kiw5Fk',
          duration: '25 min'
        }
      ]
    },
    '2': {
      title: 'Roteiro de Criativos que Convertem',
      description: 'Descubra como criar criativos que realmente convertem e geram resultados.',
      lessons: [
        {
          title: 'Princípios dos Criativos',
          description: 'Fundamentos para criar criativos que convertem e capturam a atenção do seu público.',
          videoUrl: 'https://youtu.be/9bZkp7q19f0',
          videoId: '9bZkp7q19f0',
          duration: '20 min'
        },
        {
          title: 'Roteiro Avançado',
          description: 'Técnicas avançadas de roteirização para maximizar suas conversões.',
          videoUrl: 'https://youtu.be/2Vv-BfVoq4g',
          videoId: '2Vv-BfVoq4g',
          duration: '30 min'
        }
      ]
    },
    '3': {
      title: 'Prompts para IA Trabalhar pra Você',
      description: 'Aprenda a usar prompts eficazes para fazer a IA trabalhar a seu favor.',
      lessons: [
        {
          title: 'Dominando Prompts de IA',
          description: 'Como criar prompts que geram resultados incríveis e automatizam seu trabalho.',
          videoUrl: 'https://youtu.be/479rtxoUNDQ',
          videoId: '479rtxoUNDQ',
          duration: '35 min'
        }
      ]
    },
    '4': {
      title: 'Calculadora de Métricas',
      description: 'Domine as métricas essenciais para o sucesso dos seus projetos.',
      lessons: [
        {
          title: 'Métricas Essenciais',
          description: 'Aprenda a calcular e interpretar as métricas mais importantes para seu negócio.',
          videoUrl: 'https://youtu.be/479rtxoUNDQ',
          videoId: '479rtxoUNDQ',
          duration: '28 min'
        }
      ]
    }
  };

  const module = moduleData[id as keyof typeof moduleData];

  if (!module) {
    return (
      <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Módulo não encontrado</h1>
          <Link to="/" className="text-[#FFDD79] hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const currentLessonData = module.lessons[currentLesson];

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-[#FFDD79] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Dashboard
          </Link>
          
          <div className="flex items-center space-x-3">
            <img 
              src="https://raw.githubusercontent.com/minbrand/minbrand-/refs/heads/main/img/minbrand-b.webp" 
              alt="Minbrand" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{module.title}</h1>
              <p className="text-gray-400">{module.description}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${currentLessonData.videoId}`}
                  title={currentLessonData.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
            
            {/* Lesson Description */}
            <div className="mt-6 bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {currentLessonData.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {currentLessonData.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#FFDD79]">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{currentLessonData.duration}</span>
                </div>
                {currentLessonData.externalLink && (
                  <a
                    href={currentLessonData.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#28ffbb] hover:bg-[#28ffbb]/90 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    {currentLessonData.externalLink.text}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">
                Playlist do Módulo ({module.lessons.length} aulas)
              </h3>
              
              <div className="space-y-3">
                {module.lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      currentLesson === index
                        ? 'bg-[#FFDD79]/20 border border-[#FFDD79]'
                        : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {currentLesson === index ? (
                          <div className="w-6 h-6 bg-[#FFDD79] rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">{index + 1}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-medium ${
                          currentLesson === index ? 'text-[#FFDD79]' : 'text-white'
                        }`}>
                          {lesson.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {lesson.duration}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
