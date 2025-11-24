"use client";

import { useState } from "react";
import { Activity, Flame, Target, Users, Video, Watch, Plus, TrendingUp, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dados de exemplo
  const todayStats = {
    steps: 8432,
    stepsGoal: 10000,
    calories: 1847,
    caloriesGoal: 2200,
    distance: 6.2,
    activeMinutes: 45,
  };

  const recentActivities = [
    { id: 1, type: "Corrida", duration: "32 min", distance: "5.2 km", calories: 320, time: "Hoje, 07:30" },
    { id: 2, type: "Ciclismo", duration: "45 min", distance: "15.8 km", calories: 420, time: "Ontem, 18:00" },
    { id: 3, type: "Caminhada", duration: "25 min", distance: "2.1 km", calories: 150, time: "Ontem, 12:30" },
  ];

  const workoutPlans = [
    { id: 1, name: "Perda de Peso", duration: "4 semanas", level: "Intermediário", progress: 65 },
    { id: 2, name: "Ganho de Massa", duration: "8 semanas", level: "Avançado", progress: 30 },
    { id: 3, name: "Resistência", duration: "6 semanas", level: "Iniciante", progress: 85 },
  ];

  const guidedWorkouts = [
    { id: 1, title: "HIIT Cardio", duration: "20 min", level: "Intermediário", image: "🔥" },
    { id: 2, title: "Yoga Matinal", duration: "30 min", level: "Iniciante", image: "🧘" },
    { id: 3, title: "Treino de Força", duration: "45 min", level: "Avançado", image: "💪" },
    { id: 4, title: "Alongamento", duration: "15 min", level: "Todos", image: "🤸" },
  ];

  const challenges = [
    { id: 1, name: "Desafio 30 Dias", participants: 1247, progress: 45, daysLeft: 16 },
    { id: 2, name: "10K em Maio", participants: 892, progress: 72, daysLeft: 8 },
    { id: 3, name: "Yoga Diário", participants: 2341, progress: 20, daysLeft: 24 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FitTracker
                </h1>
                <p className="text-xs text-gray-500">Seu parceiro fitness</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Nova Atividade
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 bg-white p-2 rounded-xl shadow-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <Activity className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Atividades</span>
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <Flame className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Nutrição</span>
            </TabsTrigger>
            <TabsTrigger value="workouts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <Video className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Treinos</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Comunidade</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Passos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{todayStats.steps.toLocaleString()}</div>
                  <Progress value={(todayStats.steps / todayStats.stepsGoal) * 100} className="mt-3 bg-blue-400" />
                  <p className="text-xs mt-2 text-blue-100">Meta: {todayStats.stepsGoal.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    Calorias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{todayStats.calories}</div>
                  <Progress value={(todayStats.calories / todayStats.caloriesGoal) * 100} className="mt-3 bg-orange-400" />
                  <p className="text-xs mt-2 text-orange-100">Meta: {todayStats.caloriesGoal} kcal</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Distância
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{todayStats.distance} km</div>
                  <p className="text-sm mt-3 text-green-100">Hoje</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Watch className="w-4 h-4" />
                    Tempo Ativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{todayStats.activeMinutes} min</div>
                  <p className="text-sm mt-3 text-purple-100">Hoje</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Atividades Recentes
                </CardTitle>
                <CardDescription>Suas últimas atividades registradas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{activity.type}</h4>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold text-gray-900">{activity.duration}</p>
                          <p className="text-xs text-gray-500">Duração</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-gray-900">{activity.distance}</p>
                          <p className="text-xs text-gray-500">Distância</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-orange-600">{activity.calories}</p>
                          <p className="text-xs text-gray-500">kcal</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Rastreamento de Atividades</CardTitle>
                <CardDescription>Monitore suas atividades físicas diárias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Caminhada", "Corrida", "Ciclismo", "Natação", "Treino em Casa", "Yoga"].map((activity, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="h-24 flex flex-col gap-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all"
                    >
                      <Activity className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold">{activity}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Histórico Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="w-12 text-sm font-medium text-gray-600">{day}</span>
                      <Progress value={Math.random() * 100} className="flex-1" />
                      <span className="w-20 text-sm text-gray-600 text-right">{Math.floor(Math.random() * 5000 + 5000)} passos</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  Contagem de Calorias
                </CardTitle>
                <CardDescription>Monitore sua ingestão e queima de calorias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Consumidas</p>
                    <p className="text-4xl font-bold text-green-600">1847</p>
                    <p className="text-xs text-gray-500 mt-1">kcal</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Queimadas</p>
                    <p className="text-4xl font-bold text-orange-600">523</p>
                    <p className="text-xs text-gray-500 mt-1">kcal</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Restantes</p>
                    <p className="text-4xl font-bold text-blue-600">876</p>
                    <p className="text-xs text-gray-500 mt-1">kcal</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Refeições de Hoje</h4>
                  {[
                    { meal: "Café da Manhã", calories: 420, time: "08:00" },
                    { meal: "Almoço", calories: 680, time: "12:30" },
                    { meal: "Lanche", calories: 250, time: "16:00" },
                    { meal: "Jantar", calories: 497, time: "19:30" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.meal}</p>
                        <p className="text-sm text-gray-500">{item.time}</p>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        {item.calories} kcal
                      </Badge>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Refeição
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workouts Tab */}
          <TabsContent value="workouts" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Planos de Treino
                </CardTitle>
                <CardDescription>Programas personalizados para suas metas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workoutPlans.map((plan) => (
                    <div key={plan.id} className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                          <p className="text-sm text-gray-500">{plan.duration} • {plan.level}</p>
                        </div>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          {plan.progress}%
                        </Badge>
                      </div>
                      <Progress value={plan.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-600" />
                  Treinos Guiados
                </CardTitle>
                <CardDescription>Vídeos e instruções passo a passo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guidedWorkouts.map((workout) => (
                    <div key={workout.id} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-300">
                      <div className="text-5xl mb-4 text-center">{workout.image}</div>
                      <h4 className="font-semibold text-gray-900 text-center mb-2">{workout.title}</h4>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <span>{workout.duration}</span>
                        <span>•</span>
                        <span>{workout.level}</span>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        Iniciar Treino
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Desafios em Grupo
                </CardTitle>
                <CardDescription>Participe e compartilhe seu progresso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {challenges.map((challenge) => (
                    <div key={challenge.id} className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <Award className="w-4 h-4 text-green-600" />
                            {challenge.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {challenge.participants.toLocaleString()} participantes
                          </p>
                        </div>
                        <Badge variant="outline" className="border-green-600 text-green-700">
                          {challenge.daysLeft} dias restantes
                        </Badge>
                      </div>
                      <Progress value={challenge.progress} className="h-2 mb-2" />
                      <p className="text-xs text-gray-600">{challenge.progress}% concluído</p>
                      <Button variant="outline" className="w-full mt-3 border-green-600 text-green-700 hover:bg-green-50">
                        Participar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Conquistas</CardTitle>
                <CardDescription>Suas medalhas e marcos alcançados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: "🏆", name: "Primeira Corrida", unlocked: true },
                    { icon: "🔥", name: "Sequência 7 Dias", unlocked: true },
                    { icon: "⭐", name: "10K Passos", unlocked: true },
                    { icon: "💪", name: "Força Total", unlocked: false },
                    { icon: "🎯", name: "Meta Mensal", unlocked: false },
                    { icon: "👑", name: "Campeão", unlocked: false },
                  ].map((achievement, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl text-center transition-all ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300"
                          : "bg-gray-100 opacity-50"
                      }`}
                    >
                      <div className="text-4xl mb-2">{achievement.icon}</div>
                      <p className="text-xs font-medium text-gray-700">{achievement.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Watch className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Sincronize com seus dispositivos fitness</p>
          </div>
          <p className="text-xs text-gray-500">
            Compatível com smartwatches e pulseiras fitness
          </p>
        </div>
      </footer>
    </div>
  );
}
