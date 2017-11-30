# Update Sample and annotation Set
#node sample_annotation.js --host=http://iva-dev.clinbioinfosspa.es:8080/opencga-1.3.0-rc --study=user@project:study --sample=PathAbsoluteToJson --sampleid=22 --variablesetid=4 --sid=tokenvalido
node sample_annotation.js --host=http://iva-dev.clinbioinfosspa.es:8080/opencga-1.3.0-rc --study=test@reference_grch37:1kG_phase3 
 --sample=/home/amartinez/Proyectos/script_nodejs_create_sample_individual_opencga/data/sample.json 
 --sampleid=150 --variablesetid=4 
 --sid=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXVkIjoiT3BlbkNHQSB1c2VycyIsImlhdCI6MTUwOTYzNTAwNywiZXhwIjoxNTA5NjQyMjA3fQ.4z5wZeSzL9dRnzt0TIisPco8rdQfPRkdT8kOgM0dbvE

# Create individual 
#node individual.js --host=http://iva-dev.clinbioinfosspa.es:8080/opencga-1.3.0-rc --study=user@project:study --individual=PathAbsoluteToJson --sid=tokenvalido
node individual.js --host=http://iva-dev.clinbioinfosspa.es:8080/opencga-1.3.0-rc --study=test@reference_grch37:1kG_phase3 
--individual=/home/amartinez/Proyectos/script_nodejs_create_sample_individual_opencga/data/individual.json
--sid=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXVkIjoiT3BlbkNHQSB1c2VycyIsImlhdCI6MTUwOTYzNTAwNywiZXhwIjoxNTA5NjQyMjA3fQ.4z5wZeSzL9dRnzt0TIisPco8rdQfPRkdT8kOgM0dbvE
