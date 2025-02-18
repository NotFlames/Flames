from telethon import TelegramClient, events, sync
from telethon.tl.functions.messages import GetMessagesRequest
import instaloader
import time
import random
import os
from itertools import islice
from config import *

def scraper(Username):
    try:
        L = instaloader.Instaloader()
        profile = instaloader.Profile.from_username(L.context, Username)
        latest_post = profile.get_posts()
    except:
        print("Running on Proxy!!")
        L = instaloader.Instaloader()
        proxy = random.choice(PROXIES)
        L.context._session.proxies = {
            'http':proxy,
            'https':proxy
        }
        profile = instaloader.Profile.from_username(L.context, Username)
        latest_post = profile.get_posts()
        

    cur_list = []

    for i in islice(latest_post, NO_OF_PINNED+1):
        cur_list.append(i)

    for i in range(0, NO_OF_PINNED):
        cur_list.pop(0)

    return cur_list

bot = TelegramClient("InstaScrape", API_ID, API_HASH)

async def main():
    await bot.connect()

    if not await bot.is_user_authorized():
        await bot.send_code_request(PHONE)
        await bot.sign_in(PHONE, input("Enter the code :-"))

    await bot.send_message("me", "Hello niggas!")

    late_list = []

    print("LOOP STARTED")
    i = 0
    while True:

        cur_list = scraper(INSTA_USERNAME)

        if cur_list != late_list:
            
            for i in cur_list:
                print("FOUND NEW POST : POST SHORTCODE - ", i.shortcode)

                url = f"https://www.instagram.com/p/{i.shortcode}/"
                caption = i.caption

                scr = await bot.send_message(SCARP_GRP, url)
                print("SCRAPING..")
                time.sleep(60)

                scr_msg = await bot.get_messages(SCARP_GRP, ids=[scr.id + 1])

                try:
                    await bot.send_file(CHANNEL_TO_POST, scr_msg, caption="**" + i.caption + "**" + "\n\n" + url, prase_mode="Mardown")
                    print("SUCCESSFULLY UPLOADED")
                except TypeError:
                    await bot.send_file(CHANNEL_TO_POST, scr_msg, caption=url)
                    print("SUCCESSFULLY UPLOADED")
                except:
                    await bot.send_file(CHANNEL_TO_POST, scr_msg, caption="**" + i.caption[0:200] + "...**" + "\n\n" + url)
                    print("SUCCESSFULLY UPLOADED")

            late_list = cur_list

        print(i)
        i+=1

        time.sleep(TIME_BET_REQ)

with bot:
    bot.loop.run_until_complete(main())

