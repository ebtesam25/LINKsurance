import os
import pymongo
import json
import time

def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }



    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["healthdeck"]

    if request.method == 'GET':

        retjson = {}

        userid = request.args.get('userid')

        if userid =='-1':

            

            retjson['userid'] = '-1'
            retjson['score'] = 999

            return json.dumps(retjson)
        
        ## calculate emipirical insurance score from raw data


        col = db.readings

        pulses = []
        spo2s = []
        temps = []

        fevers = 0

        for x in col.find():
            if x['userid'] != userid:
                continue
            pulses.append(int(x['pulse']))
            spo2s.append(int(x['spo2']))
            temps.append(float(x['temp']))
            if float(x['temp']) >= 99.0:
                fevers = fevers+1
        
        finalscore = 800.0

        # retjson['userid'] = userid
        # retjson['fevers'] = fevers
        # retjson['score'] = finalscore

        # return json.dumps(retjson)


        if len(pulses) == 0:
            ##user not found
            retjson['pulseav'] = 0
            retjson['spo2av'] = 0
            retjson['tempav'] = 0.0
        else:
            retjson['pulseav'] = sum(pulses)/len(pulses)
            retjson['spo2av'] = sum(spo2s)/len(spo2s)
            retjson['tempav'] = sum(temps)/len(temps)
            
            if sum(pulses)/len(pulses) > 98:
                finalscore = finalscore * 1.2
            if sum(spo2s)/len(spo2s) < 95:
                finalscore = finalscore * 1.1
            if fevers > 5:
                finalscore = finalscore * 1.02

 
        finalscore = int(finalscore)

        retjson['userid'] = userid
        retjson['fevers'] = fevers
        retjson['score'] = finalscore

        return json.dumps(retjson)


    request_json = request.get_json()


    action = request_json['action']

    payload = {}
    items = []




    # col = db.readings

    # maxid = 1

    # for x in col.find():
    #     maxid = maxid+1

    # if "update" in request_json:

    #     t = int(time.time())

    #     ts = str(t)
    #     payload = {}
    #     payload['id'] = str(maxid)
    #     payload['userid'] = 1
    #     payload['ts'] = ts
    #     payload['pulse'] = request_json['pulse']
    #     payload['temp'] = request_json['tmp']
    #     payload['spo2'] = request_json['spo2']
    #     payload['gsrRaw'] = request_json['gsrraw']
    #     payload['gsrDev'] = request_json['gsrdev']
    #     payload['glucose'] = request_json['glucose']

    #     col.insert_one(payload)


    #     retjson = {}

    #     retjson['mongoresult'] = str(maxid)

    #     return json.dumps(retjson)



    # times = []
    # pulses = []
    # spo2s = []
    # temps = []
    # gsr1 = []
    # gsr2 = []
    # glucose = []
    # maxid = 0
    # pulse = 0
    # spo2 = 0
    # temp = 0.0
    
    # for x in col.find().sort("id", -1).limit(50):

    #     pulses.append(x['pulse'])
    #     spo2s.append(x['spo2'])
    #     temps.append(x['temp'])
    #     gsr1.append(x['gsrRaw'])
    #     gsr2.append(x['gsrDev'])
    #     times.append(x['ts'])
    #     glucose.append(x['glucose'])



        
    #     # pm1.append(x["pm1"])
    #     # pm2_5.append(x["pm2-5"])
    #     # pm4.append(x["pm4"])
    #     # pm10.append(x["pm10"])
    #     # nc0_5.append(x["nc0-5"])
    #     # tps.append(x["tps"])
    #     # tem.append(x["temperature"])
    #     # hum.append(x["humidity"])
    #     # times.append(x["ts"])
        
    #     maxid +=1

    #     pulse = x['pulse']
    #     spo2 = x['spo2']
    #     temp = x['temp']




        

    
    
    # retjson = {}

    # retjson['pulse'] = pulses
    # retjson['oxygen'] = spo2s
    # retjson['temperature'] = temps
    # retjson['gsrRaw'] = gsr1
    # retjson['gsrDev'] = gsr2
    # retjson['times'] = times
    # retjson['glucose'] = glucose
    # # retjson['pm1'] = pm1
    # # retjson['pm2-5'] = pm2_5
    # # retjson['pm4'] = pm4
    # # retjson['pm10'] = pm10
    # # retjson['nc0-5'] = nc0_5
    # # retjson['typical particle size'] = tps
    # # retjson['temperature'] = tem
    # # retjson['humidity'] = hum
    # # retjson['timestamps'] = times
    
    # retjson['mongoresult'] = str(maxid)

    # return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
