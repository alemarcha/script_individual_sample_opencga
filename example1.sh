#Update Sample
#node sample_annotation.js --study=user@project:study --sample=PathAbsoluteToJson --sampleid=22 --variablesetid=4 --sid=tokenvalido
node index.js --study=test@reference_grch37:1kG_phase3 
 --sample=/home/amartinez/Proyectos/script_nodejs_create_sample_individual_opencga/data/sample.json 
 --sampleid=150 --variablesetid=4 
 --sid=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXVkIjoiT3BlbkNHQSB1c2VycyIsImlhdCI6MTUwOTYzNTAwNywiZXhwIjoxNTA5NjQyMjA3fQ.4z5wZeSzL9dRnzt0TIisPco8rdQfPRkdT8kOgM0dbvE

#Create individual 
#node individual.js --study=user@project:study --individual=PathAbsoluteToJson --sid=tokenvalido
node individual.js --study=test@reference_grch37:1kG_phase3 
--individual=/home/amartinez/Proyectos/script_nodejs_create_sample_individual_opencga/data/individual.json
--sid=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXVkIjoiT3BlbkNHQSB1c2VycyIsImlhdCI6MTUwOTYzNTAwNywiZXhwIjoxNTA5NjQyMjA3fQ.4z5wZeSzL9dRnzt0TIisPco8rdQfPRkdT8kOgM0dbvE
