-- RunCoach Pro Database Schema
-- SQLite Database for local development

-- Tabela de Assessorias
CREATE TABLE assessorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    subdomain TEXT UNIQUE,
    description TEXT,
    owner_name TEXT NOT NULL,
    owner_email TEXT NOT NULL,
    phone TEXT,
    city TEXT,
    plan TEXT DEFAULT 'basic', -- basic, pro, premium
    status TEXT DEFAULT 'trial', -- trial, active, suspended
    modules TEXT, -- JSON array of enabled modules
    brand_color TEXT DEFAULT '#ea580c',
    logo_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Usuários (SuperAdmin, Admin, Aluno)
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL, -- superadmin, admin, student
    assessoria_id INTEGER,
    avatar_url TEXT,
    phone TEXT,
    city TEXT,
    bio TEXT,
    cref TEXT,
    specialty TEXT,
    experience_years INTEGER,
    status TEXT DEFAULT 'active', -- active, inactive, suspended
    last_login DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (assessoria_id) REFERENCES assessorias(id)
);

-- Tabela de Alunos (dados específicos)
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    age INTEGER,
    weight REAL,
    height INTEGER,
    vo2max REAL,
    resting_hr INTEGER,
    max_hr INTEGER,
    goal TEXT,
    level TEXT, -- beginner, intermediate, advanced
    weekly_km INTEGER DEFAULT 0,
    completion_rate REAL DEFAULT 0,
    join_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabela de Treinos
CREATE TABLE workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- base, intervals, tempo, long, fartlek, hill
    duration TEXT,
    distance TEXT,
    intensity TEXT, -- low, medium, high
    instructions TEXT, -- JSON array of exercises
    created_by INTEGER NOT NULL,
    status TEXT DEFAULT 'draft', -- draft, active, archived
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Tabela de Atribuições de Treino
CREATE TABLE workout_assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    assigned_date DATE,
    due_date DATE,
    completed_date DATETIME,
    status TEXT DEFAULT 'assigned', -- assigned, completed, missed
    feedback TEXT,
    duration_actual TEXT,
    distance_actual TEXT,
    avg_pace TEXT,
    avg_hr INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workout_id) REFERENCES workouts(id),
    FOREIGN KEY (student_id) REFERENCES users(id)
);

-- Tabela de Mensagens
CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    read_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

-- Tabela de Eventos/Agenda
CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL,  -- group_training, assessment, consultation, individual_training
    start_datetime DATETIME NOT NULL,
    end_datetime DATETIME NOT NULL,
    location TEXT,
    created_by INTEGER NOT NULL,
    status TEXT DEFAULT 'scheduled', -- scheduled, confirmed, cancelled
    max_participants INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Tabela de Participantes de Eventos
CREATE TABLE event_participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    status TEXT DEFAULT 'registered', -- registered, confirmed, cancelled
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabela de Provas
CREATE TABLE races (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date DATE NOT NULL,
    location TEXT,
    distance TEXT,
    type TEXT, -- marathon, half_marathon, 10k, 5k, trail
    registration_deadline DATE,
    price TEXT,
    website TEXT,
    created_by INTEGER NOT NULL,
    status TEXT DEFAULT 'upcoming', -- upcoming, registration_open, completed, cancelled
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Tabela de Participantes de Provas
CREATE TABLE race_participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    race_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    goal_time TEXT,
    actual_time TEXT,
    position INTEGER,
    status TEXT DEFAULT 'registered', -- registered, completed, dns, dnf
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (race_id) REFERENCES races(id),
    FOREIGN KEY (student_id) REFERENCES users(id)
);

-- Tabela de Posts Sociais
CREATE TABLE social_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    workout_data TEXT, -- JSON with workout details
    tags TEXT, -- JSON array of tags
    likes_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    shares_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- Tabela de Curtidas
CREATE TABLE post_likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES social_posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE(post_id, user_id)
);

-- Tabela de Comentários
CREATE TABLE post_comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES social_posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabela de Pagamentos
CREATE TABLE payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    assessoria_id INTEGER NOT NULL,
    student_id INTEGER,
    amount REAL NOT NULL,
    type TEXT NOT NULL, -- monthly, registration, assessment
    status TEXT DEFAULT 'pending', -- pending, paid, overdue, cancelled
    due_date DATE,
    paid_date DATETIME,
    payment_method TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (assessoria_id) REFERENCES assessorias(id),
    FOREIGN KEY (student_id) REFERENCES users(id)
);

-- Tabela de Configurações
CREATE TABLE settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    assessoria_id INTEGER,
    key TEXT NOT NULL,
    value TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (assessoria_id) REFERENCES assessorias(id)
);

-- Índices para melhor performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_assessoria ON users(assessoria_id);
CREATE INDEX idx_workout_assignments_student ON workout_assignments(student_id);
CREATE INDEX idx_workout_assignments_workout ON workout_assignments(workout_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id);
CREATE INDEX idx_events_created_by ON events(created_by);
CREATE INDEX idx_social_posts_author ON social_posts(author_id);
CREATE INDEX idx_payments_assessoria ON payments(assessoria_id);
CREATE INDEX idx_payments_student ON payments(student_id);
