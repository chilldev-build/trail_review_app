insert into users
    (first_name, last_name, email)
values
    ('Sean', 'Reid', 'sean@digitalcrafts.com')
;

insert into trails
    (name, address, street, city, state, picture)
values
    ('PATH400', 'Piedmont Rd and Lenox Rd Atlanta, Georgia 30327', 'Lenox Rd', 'Atlanta', 'Georgia', '/images/PATH400.jpg'),
    ('Silver Comet Trail', 'RFRJ+MX Smyrna, Georgia', '', 'Smyrna', 'Georgia', '/images/Silvercomet.jpg'),
    ('Eastside Atlanta Beltline', '995 Monroe Dr NE, Atlanta, GA 30306', 'Monroe Dr NE', 'Atlanta', 'Georgia', '/images/eastsidebeltline.jpg')
;

insert into reviews
    (score, content, park_id, user_id)
values
    (4, 'GNARLY DUDE!!!', 1, 1)
;