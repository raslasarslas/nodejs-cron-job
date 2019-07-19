require('dotenv').config();
import cron from 'cron';

const CronJob = cron.CronJob;
const timeZone = 'Africa/Nairobi';
const cronTime = '00 00 18 * * *';

const job = new CronJob(
  cronTime,
  function() {
    // Put job here
  },
  null,
  true,
  timeZone
);
