time=`date +%Y_%m_%d_%H_%M`
pg_dump -d radamir -U radamir > ./migrations/dump/$USER\_$time.sql