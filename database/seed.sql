-- Dados iniciais para desenvolvimento local
-- RunCoach Pro - Seed Data

-- Inserir SuperAdmin
INSERT INTO users (name, email, password_hash, role, status) VALUES 
('Super Admin', 'superadmin@runcoach.com', '$2b$10$hash', 'superadmin', 'active');

-- Inserir Assessorias
INSERT INTO assessorias (name, subdomain, description, owner_name, owner_email, phone, city, plan, status, modules, brand_color) VALUES 
('RunFast Assessoria', 'runfast', 'Assessoria especializada em corrida de rua e maratona', 'Carlos Silva', 'carlos@runfast.com', '(11) 99999-9999', 'São Paulo, SP', 'premium', '["students","workouts","calendar","messages","billing","reports","races","social","integrations"]', '#ea580c'),
('Speed Training', 'speedtraining', 'Treinamento focado em velocidade e performance', 'Ana Oliveira', 'ana@speedtraining.com', '(11) 88888-8888', 'Rio de Janeiro, RJ', 'pro', '["students","workouts","calendar","messages","reports","races"]', '#3b82f6'),
('Corrida & Vida', 'corridaevida', 'Assessoria para corredores de todos os níveis', 'Pedro Santos', 'pedro@corridaevida.com', '(11) 77777-7777', 'Belo Horizonte, MG', 'premium', '["students","workouts","calendar","messages","billing","reports","races","social"]', '#10b981');

-- Inserir Administradores/Treinadores
INSERT INTO users (name, email, password_hash, role, assessoria_id, bio, cref, specialty, experience_years, status) VALUES 
('Carlos Silva', 'carlos@runfast.com', '$2b$10$hash', 'admin', 1, 'Treinador de corrida há mais de 10 anos, especializado em preparação para maratonas.', '000001-G/SP', 'Corrida de Rua e Maratona', 10, 'active'),
('Ana Oliveira', 'ana@speedtraining.com', '$2b$10$hash', 'admin', 2, 'Especialista em treinamento de velocidade e performance atlética.', '000002-G/RJ', 'Velocidade e Performance', 8, 'active'),
('Pedro Santos', 'pedro@corridaevida.com', '$2b$10$hash', 'admin', 3, 'Treinador focado em bem-estar e qualidade de vida através da corrida.', '000003-G/MG', 'Corrida Recreativa', 12, 'active'),
('João Treinador', 'joao@runfast.com', '$2b$10$hash', 'admin', 1, 'Treinador auxiliar especializado em iniciantes.', '000004-G/SP', 'Iniciantes', 5, 'active');

-- Inserir Alunos
INSERT INTO users (name, email, password_hash, role, assessoria_id, status) VALUES 
('Maria Santos', 'maria@email.com', '$2b$10$hash', 'student', 1, 'active'),
('João Silva', 'joao@email.com', '$2b$10$hash', 'student', 1, 'active'),
('Pedro Lima', 'pedro@email.com', '$2b$10$hash', 'student', 1, 'active'),
('Ana Costa', 'ana@email.com', '$2b$10$hash', 'student', 1, 'active'),
('Carla Mendes', 'carla@email.com', '$2b$10$hash', 'student', 1, 'active'),
('Bruno Oliveira', 'bruno@email.com', '$2b$10$hash', 'student', 2, 'active'),
('Lucia Ferreira', 'lucia@email.com', '$2b$10$hash', 'student', 2, 'active'),
('Roberto Silva', 'roberto@email.com', '$2b$10$hash', 'student', 3, 'active');

-- Inserir dados específicos dos alunos
INSERT INTO students (user_id, age, weight, height, goal, level, weekly_km, completion_rate, join_date) VALUES 
(5, 32, 65.5, 165, 'Maratona de São Paulo 2024', 'intermediate', 45, 95.0, '2023-06-01'),
(6, 28, 78.0, 180, 'Melhorar condicionamento', 'beginner', 25, 78.0, '2023-08-15'),
(7, 35, 70.2, 175, 'Meia Maratona sub 1:45', 'intermediate', 38, 88.0, '2023-07-10'),
(8, 29, 58.8, 160, 'Primeiro 10K', 'beginner', 20, 45.0, '2023-12-01'),
(9, 41, 72.5, 170, 'Manter forma física', 'intermediate', 35, 92.0, '2023-05-20'),
(10, 26, 75.0, 182, 'Sub 40min nos 10K', 'advanced', 55, 85.0, '2023-09-01'),
(11, 33, 62.0, 168, 'Primeira maratona', 'intermediate', 42, 90.0, '2023-10-15'),
(12, 38, 80.5, 178, 'Perder peso correndo', 'beginner', 30, 70.0, '2023-11-01');

-- Inserir Treinos
INSERT INTO workouts (title, description, type, duration, distance, intensity, instructions, created_by, status) VALUES 
('Intervalado 5x1000m', 'Aquecimento 10min + 5x1000m (R: 2min) + Volta à calma 10min', 'intervals', '45 min', '8 km', 'high', '["Aquecimento 10min ritmo fácil", "5x1000m ritmo 10K (R: 2min caminhada)", "Volta à calma 10min ritmo fácil"]', 2, 'active'),
('Long Run Domingo', 'Corrida contínua em ritmo confortável, zona 2', 'long', '90 min', '15 km', 'low', '["Corrida contínua 90min", "Ritmo conversação", "Hidratação a cada 5km"]', 2, 'active'),
('Tempo Run 6km', 'Aquecimento 10min + 20min em ritmo de limiar + Volta à calma 5min', 'tempo', '35 min', '6 km', 'medium', '["Aquecimento 10min", "20min ritmo limiar", "Volta à calma 5min"]', 2, 'active'),
('Corrida Base Fácil', 'Corrida em ritmo confortável, conversação possível', 'base', '40 min', '7 km', 'low', '["Corrida contínua 40min", "Ritmo confortável", "Foco na técnica"]', 2, 'active'),
('Fartlek 30min', 'Treino de variação de ritmo livre', 'fartlek', '45 min', '8 km', 'medium', '["Aquecimento 10min", "30min fartlek livre", "Volta à calma 5min"]', 2, 'active');

-- Inserir Atribuições de Treino
INSERT INTO workout_assignments (workout_id, student_id, assigned_date, due_date, status) VALUES 
(1, 5, '2024-01-18', '2024-01-18', 'assigned'),
(1, 6, '2024-01-18', '2024-01-18', 'assigned'),
(1, 7, '2024-01-18', '2024-01-18', 'assigned'),
(2, 5, '2024-01-21', '2024-01-21', 'assigned'),
(2, 6, '2024-01-21', '2024-01-21', 'assigned'),
(3, 7, '2024-01-19', '2024-01-19', 'assigned'),
(4, 8, '2024-01-18', '2024-01-18', 'assigned');

-- Inserir Eventos
INSERT INTO events (title, description, type, start_datetime, end_datetime, location, created_by, status, max_participants) VALUES 
('Treino em Grupo - Intervalado', 'Treino de intervalado em grupo no parque', 'group_training', '2024-01-18 06:00:00', '2024-01-18 07:00:00', 'Parque Ibirapuera', 2, 'confirmed', 10),
('Avaliação Física - Maria Santos', 'Teste de VO2 Max e composição corporal', 'assessment', '2024-01-18 14:00:00', '2024-01-18 15:30:00', 'Consultório', 2, 'scheduled', 1),
('Long Run Domingo', 'Corrida longa em grupo', 'group_training', '2024-01-21 07:00:00', '2024-01-21 09:00:00', 'Parque Villa-Lobos', 2, 'confirmed', 15);

-- Inserir Participantes de Eventos
INSERT INTO event_participants (event_id, user_id, status) VALUES 
(1, 5, 'confirmed'),
(1, 6, 'confirmed'),
(1, 7, 'confirmed'),
(2, 5, 'confirmed'),
(3, 5, 'confirmed'),
(3, 6, 'confirmed'),
(3, 7, 'confirmed'),
(3, 8, 'registered'),
(3, 9, 'confirmed');

-- Inserir Provas
INSERT INTO races (name, date, location, distance, type, registration_deadline, price, website, created_by, status) VALUES 
('Maratona de São Paulo 2024', '2024-05-12', 'São Paulo, SP', '42.2 km', 'marathon', '2024-04-15', 'R$ 180,00', 'https://maratonasp.com.br', 2, 'upcoming'),
('Meia Maratona do Rio', '2024-03-24', 'Rio de Janeiro, RJ', '21.1 km', 'half_marathon', '2024-02-20', 'R$ 120,00', 'https://meiamaratonario.com.br', 2, 'upcoming'),
('10K Ibirapuera', '2024-02-18', 'São Paulo, SP', '10 km', '10k', '2024-02-10', 'R$ 60,00', 'https://10kibirapuera.com.br', 2, 'registration_open'),
('Corrida de São Silvestre', '2023-12-31', 'São Paulo, SP', '15 km', 'street_race', '2023-11-30', 'R$ 80,00', 'https://saosilvestre.com.br', 2, 'completed');

-- Inserir Participantes de Provas
INSERT INTO race_participants (race_id, student_id, goal_time, status) VALUES 
(1, 5, 'Sub 3:30', 'registered'),
(1, 7, 'Sub 3:45', 'registered'),
(2, 6, 'Sub 1:45', 'registered'),
(2, 8, 'Sub 2:00', 'registered'),
(2, 9, 'Sub 1:50', 'registered'),
(3, 8, 'Sub 45:00', 'registered'),
(3, 9, 'Sub 50:00', 'registered');

-- Inserir resultados da São Silvestre (prova concluída)
UPDATE race_participants SET actual_time = '1:05:23', position = 45, status = 'completed' WHERE race_id = 4 AND student_id = 5;
UPDATE race_participants SET actual_time = '1:12:45', position = 78, status = 'completed' WHERE race_id = 4 AND student_id = 6;
UPDATE race_participants SET actual_time = '1:08:12', position = 56, status = 'completed' WHERE race_id = 4 AND student_id = 7;

-- Inserir Posts Sociais
INSERT INTO social_posts (author_id, content, workout_data, tags, likes_count, comments_count) VALUES 
(5, 'Acabei de completar meu primeiro 10K! Que sensação incrível! 🏃‍♀️💪 Obrigada pelas dicas, Carlos!', '{"type":"10K","time":"45:23","pace":"4:32/km","distance":"10.0 km"}', '["10K","PB","Primeira vez"]', 15, 8),
(6, 'Treino de intervalado hoje foi puxado, mas consegui manter o ritmo! 5x1000m concluído ✅', '{"type":"Intervalado","time":"45:00","pace":"4:15/km","distance":"8.5 km"}', '["Intervalado","Treino forte"]', 12, 5),
(7, 'Long run de domingo no parque. O tempo estava perfeito! ☀️🌳 15km de pura alegria!', '{"type":"Long Run","time":"1:18:45","pace":"5:15/km","distance":"15.0 km"}', '["Long Run","Domingo","Parque"]', 20, 12),
(8, 'Primeira vez correndo na chuva! Foi uma experiência única 🌧️ Descobri que adoro correr no tempo fechado!', '{"type":"Corrida Base","time":"35:20","pace":"5:53/km","distance":"6.0 km"}', '["Chuva","Primeira vez","Descoberta"]', 18, 9);

-- Inserir Curtidas
INSERT INTO post_likes (post_id, user_id) VALUES 
(1, 6), (1, 7), (1, 8), (1, 9),
(2, 5), (2, 7), (2, 8),
(3, 5), (3, 6), (3, 8), (3, 9),
(4, 5), (4, 6), (4, 7);

-- Inserir Comentários
INSERT INTO post_comments (post_id, user_id, content) VALUES 
(1, 2, 'Parabéns Maria! Excelente tempo para o primeiro 10K! 👏'),
(1, 6, 'Que inspiração! Vou tentar bater seu tempo na próxima 😄'),
(2, 2, 'Muito bem João! O intervalado é sempre desafiador, mas você mandou bem!'),
(3, 5, 'Que inveja! Queria ter ido também 😍'),
(4, 2, 'Ana, correr na chuva é uma das melhores experiências! Bem-vinda ao clube! 🌧️');

-- Inserir Mensagens
INSERT INTO messages (sender_id, receiver_id, content) VALUES 
(5, 2, 'Carlos, tenho uma dúvida sobre o treino de amanhã. Posso fazer no esteira?'),
(2, 5, 'Oi Maria! Pode sim, mas tenta manter a mesma intensidade. Qualquer coisa me chama!'),
(6, 2, 'Oi Carlos! Senti um desconforto no joelho durante o treino. O que você recomenda?'),
(2, 6, 'João, vamos com calma. Faz gelo por 15min e descansa hoje. Amanhã conversamos melhor.'),
(8, 2, 'Consegui completar meu primeiro 5K hoje! Muito obrigada pelo apoio! 🎉'),
(2, 8, 'Ana, que alegria! Parabéns! Agora vamos para o próximo objetivo: 10K! 💪');

-- Inserir Pagamentos
INSERT INTO payments (assessoria_id, student_id, amount, type, status, due_date, description) VALUES 
(1, 5, 350.00, 'monthly', 'paid', '2024-01-15', 'Mensalidade Janeiro 2024'),
(1, 6, 350.00, 'monthly', 'paid', '2024-01-15', 'Mensalidade Janeiro 2024'),
(1, 7, 350.00, 'monthly', 'pending', '2024-01-15', 'Mensalidade Janeiro 2024'),
(1, 8, 280.00, 'monthly', 'overdue', '2024-01-15', 'Mensalidade Janeiro 2024'),
(1, 9, 350.00, 'monthly', 'paid', '2024-01-15', 'Mensalidade Janeiro 2024'),
(2, 10, 300.00, 'monthly', 'paid', '2024-01-15', 'Mensalidade Janeiro 2024'),
(2, 11, 300.00, 'monthly', 'paid', '2024-01-15', 'Mensalidade Janeiro 2024'),
(3, 12, 280.00, 'monthly', 'pending', '2024-01-15', 'Mensalidade Janeiro 2024');

-- Inserir Configurações
INSERT INTO settings (assessoria_id, key, value) VALUES 
(1, 'notification_email', 'true'),
(1, 'notification_sms', 'false'),
(1, 'auto_backup', 'true'),
(1, 'max_students_per_trainer', '50'),
(2, 'notification_email', 'true'),
(2, 'notification_sms', 'true'),
(2, 'auto_backup', 'true'),
(3, 'notification_email', 'true'),
(3, 'auto_backup', 'false');
